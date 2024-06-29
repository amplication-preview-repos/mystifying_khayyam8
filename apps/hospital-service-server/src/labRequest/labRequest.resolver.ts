import * as graphql from "@nestjs/graphql";
import { LabRequestResolverBase } from "./base/labRequest.resolver.base";
import { LabRequest } from "./base/LabRequest";
import { LabRequestService } from "./labRequest.service";

@graphql.Resolver(() => LabRequest)
export class LabRequestResolver extends LabRequestResolverBase {
  constructor(protected readonly service: LabRequestService) {
    super(service);
  }
}
