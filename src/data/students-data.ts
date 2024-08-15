"use client"

import { student } from "@/lib/dataType";
import { faker } from "@faker-js/faker";

export let dataStudent : student[] = getStudents();

export function getStudents(): student[] {
  let res: student[] = [];

  for (let i = 0; i < 10; i++) {
    res.push({
      id: i,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      instance: faker.company.name(),
      createdAt: formatDate(faker.date.anytime()),
    });
  }
  return res;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}
