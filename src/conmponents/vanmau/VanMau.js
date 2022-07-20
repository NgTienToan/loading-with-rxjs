/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { VanMauDB } from '../../db/vanmau'

function VanMau() {
  const [copySuccess, setCopySuccess] = useState('');
  return (
    <div>
      {VanMauDB.map((vanmau, index) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
            <h4>{vanmau.title}</h4>
            <span>{vanmau.content}</span>

            <CopyToClipboard text={vanmau.content}
              onCopy={() => setCopySuccess(index)}>
              <div>
                <button style={{ width: '150px', marginTop: '15px' }}>Nhấn để copy</button>
              </div>
            </CopyToClipboard>
            {copySuccess === index ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div>
        )
      })}

    </div>
  )
}

export default VanMau