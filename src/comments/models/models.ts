import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CommentModel {
    @ApiModelPropertyOptional()
    id?: number;

    @ApiModelProperty({
        example: 'Dracula example name',
        description: 'Name as a string',
    })
    name: string;
}