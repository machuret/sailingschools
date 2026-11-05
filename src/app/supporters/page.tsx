import type {Metadata} from 'next';
import {RecommendedGallery} from './recommended';
export const metadata:Metadata={"title": "Featured sponsors | Sailing Schools", "description": "Meet our sponsors through finding the right sailing school. Read each local sponsor feature.", "alternates": {"canonical": "https://sailingschools.com.au/supporters/"}};
export default function Page(){return <RecommendedGallery/>}
