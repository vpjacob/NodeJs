import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from '@libs/db/models/episode.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
    model:Episode
})
@ApiUseTags('课时')
@Controller('episodes')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>
    ){}
}
