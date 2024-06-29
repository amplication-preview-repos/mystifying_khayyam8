import * as graphql from "@nestjs/graphql";
import { LabReportResolverBase } from "./base/labReport.resolver.base";
import { LabReport } from "./base/LabReport";
import { LabReportService } from "./labReport.service";

@graphql.Resolver(() => LabReport)
export class LabReportResolver extends LabReportResolverBase {
  constructor(protected readonly service: LabReportService) {
    super(service);
  }
}
