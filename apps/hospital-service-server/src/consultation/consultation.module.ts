import { Module } from "@nestjs/common";
import { ConsultationModuleBase } from "./base/consultation.module.base";
import { ConsultationService } from "./consultation.service";
import { ConsultationController } from "./consultation.controller";
import { ConsultationResolver } from "./consultation.resolver";

@Module({
  imports: [ConsultationModuleBase],
  controllers: [ConsultationController],
  providers: [ConsultationService, ConsultationResolver],
  exports: [ConsultationService],
})
export class ConsultationModule {}
