
import { Controller, Get } from '@nestjs/common';

// if add @ in any function, it is a special decorator example @Get, @Post, @Controller

@Controller('user')
export class UserController {
    @Get()
    getUser() {
        return 'user data get successfully!!';
    }
}
