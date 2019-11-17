import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { User } from '@libs/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud(
    { model: User }
)

@Controller('users')
@ApiUseTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){

    }
}
