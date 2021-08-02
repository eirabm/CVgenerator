import './document-layout.module.scss';
import { DocumentSideBar } from '@cvgenerator/ui'

/* eslint-disable-next-line */
export interface DocumentLayoutProps {}

export function DocumentLayout(props: DocumentLayoutProps) {
  return (
    <div>
      <DocumentSideBar />
    </div>
  );
}

export default DocumentLayout;
