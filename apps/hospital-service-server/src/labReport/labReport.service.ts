import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabReportServiceBase } from "./base/labReport.service.base";

@Injectable()
export class LabReportService extends LabReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
