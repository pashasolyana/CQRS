/* eslint-disable @typescript-eslint/no-unused-vars */
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPersonQuery } from "../impl/get-person.query";
import { Person } from "src/entities/person";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@QueryHandler(GetPersonQuery)
export class GetPersonHandler implements IQueryHandler<GetPersonQuery>{

    constructor(@InjectRepository(Person) private personRespo: Repository<Person>){}

    async execute(query: GetPersonQuery): Promise<Person[]> {
        return this.personRespo.find();
    }
}
