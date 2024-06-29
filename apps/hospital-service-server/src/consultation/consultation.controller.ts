import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsultationService } from "./consultation.service";
import { ConsultationControllerBase } from "./base/consultation.controller.base";

@swagger.ApiTags("consultations")
@common.Controller("consultations")
export class ConsultationController extends ConsultationControllerBase {
  constructor(protected readonly service: ConsultationService) {
    super(service);
  }
}
