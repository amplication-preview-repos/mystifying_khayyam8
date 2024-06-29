import * as graphql from "@nestjs/graphql";
import { ConsultationResolverBase } from "./base/consultation.resolver.base";
import { Consultation } from "./base/Consultation";
import { ConsultationService } from "./consultation.service";

@graphql.Resolver(() => Consultation)
export class ConsultationResolver extends ConsultationResolverBase {
  constructor(protected readonly service: ConsultationService) {
    super(service);
  }
}
