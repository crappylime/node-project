import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiImplicitFile } from '@nestjs/swagger';
import { PhotosService } from '../services';

@Controller('photos')
export class PhotosController {

    constructor(private photosService: PhotosService) { }

    @ApiConsumes('multipart/form-data')
    @ApiImplicitFile({ name: 'file', required: true, description: 'Upload user avatar' })
    @Post('upload-user-avatar')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file, @Body() body) {
        const avatar = await this.photosService.create(file);
        return { avatar, file, body };
    }
}
