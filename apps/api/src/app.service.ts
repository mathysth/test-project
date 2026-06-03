import { Injectable } from '@nestjs/common';
import type { ApiResponse } from '@immomatch/shared';

@Injectable()
export class AppService {
  getHealth(): ApiResponse<{ status: string }> {
    return {
      success: true,
      data: { status: 'ok' },
      message: 'ImmoMatch API is running',
    };
  }
}
