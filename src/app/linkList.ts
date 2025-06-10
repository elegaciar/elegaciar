import { LinkButton } from "./linkButtons";

export class LinkList {
  constructor(private linkButtons: LinkButton[] = []) {}

  get items(): readonly LinkButton[] {
    return this.linkButtons;
  }

  addLink(nametag: string, link: string, color: string) {
    this.linkButtons.push(new LinkButton(nametag, link, color));
  }
}
