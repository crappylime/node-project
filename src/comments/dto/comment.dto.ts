import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CommentModel } from '../models';

export class GetCommentsRequestDto {
    @ApiModelPropertyOptional()
    search?: string;
    @ApiModelPropertyOptional()
    pageIndex?: number;
    @ApiModelPropertyOptional()
    pageSize?: number;
}

export class GetCommentsResponseDto {
    @ApiModelProperty()
    pageIndex: number;
    @ApiModelProperty()
    pageSize: number;
    @ApiModelProperty()
    total: number;
    @ApiModelProperty({ type: CommentModel, isArray: true })
    data: CommentModel[];
    @ApiModelProperty()
    query: GetCommentsRequestDto;
}

export class GetCommentResponseDto {
    @ApiModelProperty()
    total: number;
    @ApiModelProperty()
    data: CommentModel;
}

export class PostCommentsRequestDto {
    @ApiModelProperty()
    comment: CommentModel;
}

export class PostCommentsResponseDto {
    @ApiModelProperty()
    total: number;
    @ApiModelProperty()
    data: GetCommentResponseDto;
}