import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>
  ){}

  async create(createCatDto: CreateCatDto) {
    try{
      // return 'This action adds a new cat';
      const cat = this.catRepository.create(createCatDto)
      return await this.catRepository.save(cat);
    }catch(e){
      console.log("Error method creadte: " , e)
    }
  } 

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} cat`;
    try{
      return this.catRepository.findOneBy({id});
    }catch(e){
      console.log("Error method finOne: " , e)
    }
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    // return `This action updates a #${id} cat`;
  try {
      return this.catRepository.update( id,  updateCatDto)
  } catch (e) {
    console.log("Error method update: " , e)
  }
  }

  async remove(id: number) {
    try {
      // return `This action removes a #${id} cat`;
      return await this.catRepository.softDelete({id}) 

    } catch (e) {
      console.log("Error method remove: " , e)
    }
  }
}
