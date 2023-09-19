class HtmlElement {
    constructor(tagName, selfClosing = false) {
      this.tagName = tagName;
      this.selfClosing = selfClosing;
      this.textContent = "";
      this.attributes = [];
      this.styles = {};
      this.children = [];
    }
  
    setAttribute(name, value) {
      this.attributes.push({ name, value });
    }
  
    setStyle(name, value) {
      this.styles[name] = value;
    }
  
    addChild(element) {
      this.children.push(element);
    }
  
    addChildAtBeginning(element) {
      this.children.unshift(element);
    }
  
    getHtml() {
      let attributesStr = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(" ");
      let stylesStr = Object.keys(this.styles).map(style => `${style}:${this.styles[style]}`).join(";");
  
      let html = `<${this.tagName} ${attributesStr}`;
      if (stylesStr) {
        html += ` style="${stylesStr}"`;
      }
  
      if (this.selfClosing) {
        html += " />";
      } else {
        html += ">";
        if (this.textContent) {
          html += this.textContent;
        }
  
        for (const child of this.children) {
          html += child.getHtml();
        }
  
        html += `</${this.tagName}>`;
      }
  
      return html;
    }
  }
  
  // Створення блоку з ідентифікатором "wrapper" та іншими елементами
  const wrapper = new HtmlElement("div", false);
  wrapper.setAttribute("id", "wrapper");
  wrapper.setStyle("display", "flex");
  
  const div1 = new HtmlElement("div", false);
  div1.setStyle("width", "300px");
  div1.setStyle("margin", "10px");
  
  const h3 = new HtmlElement("h3", false);
  h3.textContent = "What is Lorem Ipsum?";
  const img = new HtmlElement("img", true);
  img.setAttribute("src", "lipsum.jpg");
  img.setAttribute("alt", "");
  img.setStyle("width", "100%");
  
  const p = new HtmlElement("p", false);
  p.setStyle("text-align", "justify");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt accusantium molestias. Officiis deserunt excepturi nisi consequuntur nostrum praesentium. Optio, voluptatem. Corporis, dolores molestias! Saepe repellat dolorum eligendi natus sequi!";
  
  const a = new HtmlElement("a", false);
  a.setAttribute("href", "https://www.lipsum.com/");
  a.setAttribute("target", "_blank");
  a.textContent = "More...";
  
  p.addChild(a);
  div1.addChild(h3);
  div1.addChild(img);
  div1.addChild(p);
  
  wrapper.addChild(div1);
  
  // Додавання "wrapper" на сторінку
  document.write(wrapper.getHtml());