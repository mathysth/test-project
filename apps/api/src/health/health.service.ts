import { Injectable } from '@nestjs/common';
import type { HealthResponse } from '@shared/types';

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}
