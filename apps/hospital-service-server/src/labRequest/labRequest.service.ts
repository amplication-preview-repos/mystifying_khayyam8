import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabRequestServiceBase } from "./base/labRequest.service.base";

@Injectable()
export class LabRequestService extends LabRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
