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
import { Appointment } from "./Appointment";
import { AppointmentCountArgs } from "./AppointmentCountArgs";
import { AppointmentFindManyArgs } from "./AppointmentFindManyArgs";
import { AppointmentFindUniqueArgs } from "./AppointmentFindUniqueArgs";
import { CreateAppointmentArgs } from "./CreateAppointmentArgs";
import { UpdateAppointmentArgs } from "./UpdateAppointmentArgs";
import { DeleteAppointmentArgs } from "./DeleteAppointmentArgs";
import { ConsultationFindManyArgs } from "../../consultation/base/ConsultationFindManyArgs";
import { Consultation } from "../../consultation/base/Consultation";
import { Doctor } from "../../doctor/base/Doctor";
import { Patient } from "../../patient/base/Patient";
import { AppointmentService } from "../appointment.service";
@graphql.Resolver(() => Appointment)
export class AppointmentResolverBase {
  constructor(protected readonly service: AppointmentService) {}

  async _appointmentsMeta(
    @graphql.Args() args: AppointmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Appointment])
  async appointments(
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    return this.service.appointments(args);
  }

  @graphql.Query(() => Appointment, { nullable: true })
  async appointment(
    @graphql.Args() args: AppointmentFindUniqueArgs
  ): Promise<Appointment | null> {
    const result = await this.service.appointment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Appointment)
  async createAppointment(
    @graphql.Args() args: CreateAppointmentArgs
  ): Promise<Appointment> {
    return await this.service.createAppointment({
      ...args,
      data: {
        ...args.data,

        doctor: args.data.doctor
          ? {
              connect: args.data.doctor,
            }
          : undefined,

        patient: args.data.patient
          ? {
              connect: args.data.patient,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Appointment)
  async updateAppointment(
    @graphql.Args() args: UpdateAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.updateAppointment({
        ...args,
        data: {
          ...args.data,

          doctor: args.data.doctor
            ? {
                connect: args.data.doctor,
              }
            : undefined,

          patient: args.data.patient
            ? {
                connect: args.data.patient,
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

  @graphql.Mutation(() => Appointment)
  async deleteAppointment(
    @graphql.Args() args: DeleteAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.deleteAppointment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Consultation], { name: "consultations" })
  async findConsultations(
    @graphql.Parent() parent: Appointment,
    @graphql.Args() args: ConsultationFindManyArgs
  ): Promise<Consultation[]> {
    const results = await this.service.findConsultations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Doctor, {
    nullable: true,
    name: "doctor",
  })
  async getDoctor(
    @graphql.Parent() parent: Appointment
  ): Promise<Doctor | null> {
    const result = await this.service.getDoctor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  async getPatient(
    @graphql.Parent() parent: Appointment
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
