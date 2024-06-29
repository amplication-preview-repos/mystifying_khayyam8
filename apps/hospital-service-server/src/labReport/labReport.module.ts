import { Module } from "@nestjs/common";
import { LabReportModuleBase } from "./base/labReport.module.base";
import { LabReportService } from "./labReport.service";
import { LabReportController } from "./labReport.controller";
import { LabReportResolver } from "./labReport.resolver";

@Module({
  imports: [LabReportModuleBase],
  controllers: [LabReportController],
  providers: [LabReportService, LabReportResolver],
  exports: [LabReportService],
})
export class LabReportModule {}
