import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BreedsService {

  constructor(
    @InjectRepository(Breed)
    private readonly breedRepository : Repository<Breed>
  ){}

  async create(createBreedDto: CreateBreedDto) {
    try {
    // return 'This action adds  a new breed';

    const breed  = this.breedRepository.create(createBreedDto)
    return await this.breedRepository.save(breed);

      
    } catch (e) {
      console.log("Error method create: " , e)
    }
  }

  async findAll() {
    // return `This action returns all breeds`;
    try {
      return await this.breedRepository.find();

    } catch (e) {
      console.log("Error method finAll: " , e)
    }
  }


  async findOne(id: number) {
    // return `This action returns a #${id} breed`;
    try {
      
      return await this.breedRepository.findOneBy({id})

    } catch (e) {
      console.log("Error method find by id")
    }
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    // return `This action updates a #${id} breed`;
    try {
      return await this.breedRepository.update(id , updateBreedDto)

    } catch (e) {
      console.log("Error method update: " , e)
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} breed`;

    try {
      return await this.breedRepository.softDelete({id})
      
    } catch (e) {
      console.log("Error method remove: " , e)
    }
  }
}
