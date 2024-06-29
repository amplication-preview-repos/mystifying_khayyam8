import { Module } from "@nestjs/common";
import { LabRequestModuleBase } from "./base/labRequest.module.base";
import { LabRequestService } from "./labRequest.service";
import { LabRequestController } from "./labRequest.controller";
import { LabRequestResolver } from "./labRequest.resolver";

@Module({
  imports: [LabRequestModuleBase],
  controllers: [LabRequestController],
  providers: [LabRequestService, LabRequestResolver],
  exports: [LabRequestService],
})
export class LabRequestModule {}
