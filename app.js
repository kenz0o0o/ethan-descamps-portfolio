const landingImage=document.querySelector('#landing-image');
if(landingImage&&window.SITE?.landingImage) landingImage.src=window.SITE.landingImage;
const grid=document.querySelector('#project-grid');
if(grid&&window.PROJECTS){grid.innerHTML=Object.entries(window.PROJECTS).map(([slug,p],i)=>{const visual=p.hero?`<img class="${p.imageFit||''}" src="${(p.cardImage||p.hero).replace('../','')}" alt="${p.imageAlt||p.title}">`:`<div class="media-placeholder"><span>${p.visualLabel||'PROJECT MEDIA TO ADD'}</span></div>`;return `<a class="project-card ${i===0?'featured':''} reveal" href="projects/?project=${slug}"><div class="card-image ${p.imageFit==='contain'?'contain':''}">${visual}<span class="index">${String(i+1).padStart(2,'0')}</span></div><div class="card-copy"><p class="tags">${p.tag}</p><h3>${p.title}</h3><p>${p.short}</p><span class="link">View Project ↗</span></div></a>`}).join('')}
const projectIndex=document.querySelector('#project-index-list');
if(projectIndex&&window.PROJECTS){projectIndex.innerHTML=Object.entries(window.PROJECTS).map(([slug,p],i)=>`<li><a href="projects/?project=${slug}"><span>${String(i+1).padStart(2,'0')}</span><strong>${p.title}</strong><i aria-hidden="true">↗</i></a></li>`).join('')}
const observer = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
