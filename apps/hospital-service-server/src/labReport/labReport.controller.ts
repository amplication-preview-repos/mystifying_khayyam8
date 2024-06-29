import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabReportService } from "./labReport.service";
import { LabReportControllerBase } from "./base/labReport.controller.base";

@swagger.ApiTags("labReports")
@common.Controller("labReports")
export class LabReportController extends LabReportControllerBase {
  constructor(protected readonly service: LabReportService) {
    super(service);
  }
}
