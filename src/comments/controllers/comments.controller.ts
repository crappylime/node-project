import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { GetCommentResponseDto, GetCommentsRequestDto, GetCommentsResponseDto } from '../dto';
import { CommentModel } from './../models/models';

@Controller('comments')
export class CommentsController {
  private comments = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
  ].reverse();

  @Get()
  getComments(@Query() query: GetCommentsRequestDto): GetCommentsResponseDto {

    let comments = this.comments;

    if (query.search) {
      const queryReg = new RegExp(query.search, 'i');
      comments = this.comments.filter(row => row.name.search(queryReg) >= 0);
    }
    const pageIndex = query.pageIndex || 0;
    const pageSize = query.pageSize || 5;
    const data = comments.slice(pageIndex * pageSize).slice(0, pageSize);

    return {
      pageIndex,
      pageSize,
      total: comments.length,
      data,
      query,
    };
  }

  @Get(':id')
  getComment(@Param('id') id: string): GetCommentResponseDto {

    const comment = this.comments.find(c => c.id === parseInt(id, 10));

    if (!comment) {
      throw new NotFoundException('Contact not found');
    }

    return {
      total: this.comments.length,
      data: comment,
    };
  }

  @Post()
  postComment(@Body() data: CommentModel): GetCommentResponseDto {
    const comment = {
      name: '',
      ...data,
      id: this.comments.length + 1,
    };
    this.comments.unshift(comment);
    return {
      total: this.comments.length,
      data,
    }
  }
}
