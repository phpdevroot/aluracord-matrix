import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
  console.log(props);
  const Tag = props.tag || 'h1';

  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['500']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function Pg404() {
  return (
    <div>
      <Titulo>COME WITH ME IF WANNA LIVE</Titulo>
      <h2>PAGE NOT FOUND!!</h2>
      <img src="../src/t1000.png"></img>
    </div>
  );
}

export default Pg404;
