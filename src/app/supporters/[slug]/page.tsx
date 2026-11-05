import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {stories,SponsorArticle} from '../recommended';
export const dynamicParams=false;
export function generateStaticParams(){return stories.map(story=>({slug:story.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const story=stories.find(s=>s.slug===slug);if(!story)return {};return {title:story.headline,description:story.summary,alternates:{canonical:'/supporters/'+slug+'/'},openGraph:{title:story.headline,description:story.summary,url:'/supporters/'+slug+'/',images:[story.tiles[0].image.src]},twitter:{card:'summary_large_image',title:story.headline,description:story.summary,images:[story.tiles[0].image.src]}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const story=stories.find(s=>s.slug===slug);if(!story)notFound();return <SponsorArticle story={story}/> }
