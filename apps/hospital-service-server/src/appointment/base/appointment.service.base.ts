/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Appointment as PrismaAppointment,
  Consultation as PrismaConsultation,
  Doctor as PrismaDoctor,
  Patient as PrismaPatient,
} from "@prisma/client";

export class AppointmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AppointmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.appointment.count(args);
  }

  async appointments(
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.appointment.findMany(args);
  }
  async appointment(
    args: Prisma.AppointmentFindUniqueArgs
  ): Promise<PrismaAppointment | null> {
    return this.prisma.appointment.findUnique(args);
  }
  async createAppointment(
    args: Prisma.AppointmentCreateArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.create(args);
  }
  async updateAppointment(
    args: Prisma.AppointmentUpdateArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.update(args);
  }
  async deleteAppointment(
    args: Prisma.AppointmentDeleteArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.delete(args);
  }

  async findConsultations(
    parentId: string,
    args: Prisma.ConsultationFindManyArgs
  ): Promise<PrismaConsultation[]> {
    return this.prisma.appointment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .consultations(args);
  }

  async getDoctor(parentId: string): Promise<PrismaDoctor | null> {
    return this.prisma.appointment
      .findUnique({
        where: { id: parentId },
      })
      .doctor();
  }

  async getPatient(parentId: string): Promise<PrismaPatient | null> {
    return this.prisma.appointment
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
}
