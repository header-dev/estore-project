import { Repository } from 'typeorm';

export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async save(options) {
    return this.repository.save(options);
  }

  async findOne(options) {
    return this.repository.findOne(options);
  }

  async find(options = {}) {
    return this.repository.find(options);
  }

  async update(id: number, options) {
    return this.repository.update(id, options);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }

  async count(options = {}) {
    return this.repository.count(options);
  }

  async deleteAll() {
    return this.repository.clear();
  }

  async createOrUpdate(options) {
    const entity = await this.findOne(options);
    if (entity) {
      return this.update(entity.id, options);
    } else {
      return this.save(options);
    }
  }

  async createOrUpdateMany(options: any[]) {
    const promises = options.map(async (item) => {
      const entity = await this.findOne({ where: item });
      console.log(entity);

      if (entity) {
        return this.update(entity.id, item);
      } else {
        return this.save(item);
      }
    });
    return Promise.all(promises);
  }
}
