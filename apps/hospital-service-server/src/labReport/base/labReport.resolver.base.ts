/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LabReport } from "./LabReport";
import { LabReportCountArgs } from "./LabReportCountArgs";
import { LabReportFindManyArgs } from "./LabReportFindManyArgs";
import { LabReportFindUniqueArgs } from "./LabReportFindUniqueArgs";
import { CreateLabReportArgs } from "./CreateLabReportArgs";
import { UpdateLabReportArgs } from "./UpdateLabReportArgs";
import { DeleteLabReportArgs } from "./DeleteLabReportArgs";
import { LabRequest } from "../../labRequest/base/LabRequest";
import { LabReportService } from "../labReport.service";
@graphql.Resolver(() => LabReport)
export class LabReportResolverBase {
  constructor(protected readonly service: LabReportService) {}

  async _labReportsMeta(
    @graphql.Args() args: LabReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LabReport])
  async labReports(
    @graphql.Args() args: LabReportFindManyArgs
  ): Promise<LabReport[]> {
    return this.service.labReports(args);
  }

  @graphql.Query(() => LabReport, { nullable: true })
  async labReport(
    @graphql.Args() args: LabReportFindUniqueArgs
  ): Promise<LabReport | null> {
    const result = await this.service.labReport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LabReport)
  async createLabReport(
    @graphql.Args() args: CreateLabReportArgs
  ): Promise<LabReport> {
    return await this.service.createLabReport({
      ...args,
      data: {
        ...args.data,

        labRequest: args.data.labRequest
          ? {
              connect: args.data.labRequest,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => LabReport)
  async updateLabReport(
    @graphql.Args() args: UpdateLabReportArgs
  ): Promise<LabReport | null> {
    try {
      return await this.service.updateLabReport({
        ...args,
        data: {
          ...args.data,

          labRequest: args.data.labRequest
            ? {
                connect: args.data.labRequest,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LabReport)
  async deleteLabReport(
    @graphql.Args() args: DeleteLabReportArgs
  ): Promise<LabReport | null> {
    try {
      return await this.service.deleteLabReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => LabRequest, {
    nullable: true,
    name: "labRequest",
  })
  async getLabRequest(
    @graphql.Parent() parent: LabReport
  ): Promise<LabRequest | null> {
    const result = await this.service.getLabRequest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}