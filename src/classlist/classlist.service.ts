import { Injectable } from '@nestjs/common';
import { Classlist } from './classlist.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { GetClasslistDto } from './dtos/get-classlist.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateClasslistDto } from './dtos/update-classlist.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ClasslistService {
  constructor(
    @InjectRepository(Classlist) private repo: Repository<Classlist>,
  ) {}
  create(body: CreateClasslistDto) {
    const classlist = this.repo.create(body);

    console.log('Classlist created');

    return this.repo.save(classlist);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  // find all
  findAll() {
    return this.repo.find(); // bring all
  }

  // default find query
  find({ name }: GetClasslistDto) {
    // name search
    if (name) {
      return this.repo
        .createQueryBuilder()
        .where('name = :name', { name })
        .getRawMany();
    }
  }

  async update(id: number, attrs: Partial<Classlist>) {
    // attrs has the at least one piece of User data, like email or password
    // if we dont do it this way, we wont be able to update if user just wants to update one property
    const classlist = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!classlist) {
      throw new NotFoundException('Classlist not found!!!');
    }
    Object.assign(classlist, attrs); // assign the values in attrs to user object
    console.log('Classlist updated');

    return this.repo.save(classlist); // we save here to activate hooks
  }
  // delete classlist

  async remove(id: number) {
    const classlist = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!classlist) {
      throw new NotFoundException('Classlist not found!!!'); // instead of error we throw fitting exception
    }
    console.log('Classlist deleted');

    return this.repo.remove(classlist);
  }
}
