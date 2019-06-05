import { ApiModelProperty } from '@nestjs/swagger';

export class CommentModel {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    name: string;
}