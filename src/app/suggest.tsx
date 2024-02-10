'use client'

import { useEffect, useState } from "react"
import { invoke } from '@tauri-apps/api/tauri'

const Suggest = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    invoke<string[]>('suggest', { context: 'Good way to improve my motivation.' })
      .then((response) => {
      setSuggestions(response);
    }).catch(console.error);
  }, []);
  
  return <div>{suggestions.join("\n\n")}</div>
}

export default Suggest;
