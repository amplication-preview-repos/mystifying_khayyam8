import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabRequestService } from "./labRequest.service";
import { LabRequestControllerBase } from "./base/labRequest.controller.base";

@swagger.ApiTags("labRequests")
@common.Controller("labRequests")
export class LabRequestController extends LabRequestControllerBase {
  constructor(protected readonly service: LabRequestService) {
    super(service);
  }
}
