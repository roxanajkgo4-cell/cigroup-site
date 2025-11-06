import React, { useEffect } from 'react'
export default function SEO(props: any) {
  const { title='CI GROUP', description='Description', keywords='ci,group', canonicalUrl=window.location.href } = props || {}
  useEffect(()=>{
    document.title = title
    const ensure = (sel:string, attrs: Record<string,string>) => {
      let el = document.querySelector(sel) as HTMLMetaElement | null
      if(!el){
        el = document.createElement('meta')
        for(const [k,v] of Object.entries(attrs)) (el as any).setAttribute(k,v)
        document.head.appendChild(el)
      }
      return el
    }
    (ensure('meta[name="description"]', { name:'description' }) as any).setAttribute('content', description)
    (ensure('meta[name="keywords"]', { name:'keywords' }) as any).setAttribute('content', keywords)
    ;(ensure('link[rel="canonical"]', { rel:'canonical' }) as any).setAttribute('href', canonicalUrl)
  }, [title, description, keywords, canonicalUrl])
  return null
}
