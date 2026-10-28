"use client";

import React from "react";
import type { WorkExperienceItem } from "../types/experience.type";
import { WorkExperienceCard } from "./WorkExperienceCard";

interface ExperienceItemProps {
  experience: WorkExperienceItem;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return <WorkExperienceCard experience={experience} />;
}
