import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private readonly breedRepository : Repository<Breed>
  ){}

  async create(createCatDto: CreateCatDto) {
      const breed = await this.breedRepository.findOneBy({ name: createCatDto.breed });

      if (!breed) {
        throw new BadRequestException('Breed not found');
      }
      
      return await this.catRepository.save({
        ...createCatDto,
        breed,
      })
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
    const cat = await this.catRepository.findOneBy({id});

    if(!cat){
      throw new BadRequestException('Cat not found');
    }

    let breed;
    if(updateCatDto.breed){
      breed = await this.breedRepository.findOneBy({
        name: updateCatDto.breed,
      });
      if(!breed){
        throw new BadRequestException('Breed not found');
      }
    }
    return await this.catRepository.save({
      ...cat,
      ...updateCatDto,
        breed,
    });
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
