import { Module } from '@nestjs/common';
import { ClientProxyMankar } from './client-proxy';

@Module({
  providers: [ClientProxyMankar],
  exports: [ClientProxyMankar],
})
export class ProxyModule {}
