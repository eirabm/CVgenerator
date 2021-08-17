import './document-preview.module.scss';

/* eslint-disable-next-line */
export interface DocumentPreviewProps {
  data:{
    experience: [
      {
      description: string,
      company: string,
      role: string
      }
      ],
      summary: string,
      education: [
      {
      title: string,
      university: string
      }
      ],
      otherSkills: string,
      header: {
      name: string,
      role: string
      },
      id: string
  }
}

export function DocumentPreview(props: DocumentPreviewProps) {
  return (
    <div>
      <h1>CV Preview</h1>
      <p>{props.data.header.name}</p>
    </div>
  );
}

export default DocumentPreview;
