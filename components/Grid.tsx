'use client';
import React, { useEffect, useState} from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';



export const Grid = () => {

  const [items, setItems] = useState(gridItems);

  useEffect(() => {
    setItems(gridItems);
  }, []);

  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) =>(
                <BentoGridItem 
                id={(id)}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}

                
                />
            ))}
        </BentoGrid>
    </section>
  )
}
