import { asaDetails, type CourseDetail } from './course-details';
import { iytDetails } from './course-details-iyt';
import { ryaCruisingDetails } from './course-details-rya';
import { ryaSmallBoatDetails } from './course-details-smallboats';
import { australianDetails } from './course-details-australian';
import type { SchemeKey } from './scheme-courses';

const details: Record<SchemeKey, Record<string, CourseDetail>> = {
  asa: asaDetails,
  iyt: iytDetails,
  rya: { ...ryaCruisingDetails, ...ryaSmallBoatDetails },
  'australian-sailing': australianDetails,
};

export function schemeDetail(scheme: SchemeKey, slug: string): CourseDetail {
  const detail = details[scheme][slug];
  if (!detail) throw new Error(`Missing course detail: ${scheme}/${slug}`);
  return detail;
}
