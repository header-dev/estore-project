import { SeederService } from './../database/seeder/seeder.service';
import { Command } from 'nestjs-console';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedCommand {
  constructor(private readonly seedService: SeederService) {}

  @Command({
    command: 'seed:categories',
    description: 'Seed categories',
  })
  async seedCategories() {}
}
