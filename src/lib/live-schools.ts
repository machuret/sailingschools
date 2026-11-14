import { cache } from 'react';
import { liveDirectory } from './live-directory';
import { governedSchools, schoolDirectory } from './schools';
const read = liveDirectory(governedSchools);
export const getLiveSchools = cache(async () => schoolDirectory(await read()));
