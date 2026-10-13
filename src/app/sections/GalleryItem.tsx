import React, {useEffect} from 'react';
import GLightbox from 'glightbox';
import './galleryItem.css';
import Image from 'next/image';


export default function GalleryItem({item} : {
    item: {
        id: number; image: string;
    };
}) {

         useEffect(() => {
            let lightbox: any;
    
            const initLightbox = async () => {
                const GLightbox = (await import('glightbox')).default;
    
                lightbox = GLightbox({
                    selector: '.gallery-lightbox',
                });
            };
    
            initLightbox();
    
            return () => {
                lightbox?.destroy();
            };
        }, []);

  return (
    <div className='col-lg-3 col-md-4'>
        <div className='gallery-item'>
            <a 
            href={item.image}
            className='gallery-lightbox'
            data-gall='gallery-item'>
                <Image
                width={500}
                height={300}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                src={item.image}
                alt=''
                className='img-fluid'
                />
            </a>
        </div>
    </div>
  )
}
