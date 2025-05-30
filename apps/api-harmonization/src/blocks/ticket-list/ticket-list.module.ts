import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Tickets } from '../../models';

import { TicketListController } from './ticket-list.controller';
import { TicketListService } from './ticket-list.service';

@Module({})
export class TicketListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: TicketListBlockModule,
            providers: [TicketListService, CMS.Service, Tickets.Service],
            controllers: [TicketListController],
            exports: [TicketListService],
        };
    }
}
