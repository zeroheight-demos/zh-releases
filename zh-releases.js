const zhReleasesTemplate = document.createElement("template");

zhReleasesTemplate.innerHTML = `
<ol>
  <li data-key="release">
    <details name="release" open>
      <summary><strong data-key="name"></strong> | Released <span data-key="created"></span></summary>
      <div data-key="release_notes"></div>
      <a data-key="release_url">View version</a>
    </details>
  </li>
</ol>
`;

zhReleasesTemplate.id = "zh-releases-template";

if (!document.getElementById(zhReleasesTemplate.id)) {
  document.body.appendChild(zhReleasesTemplate);
}

class zhReleases extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "zh-releases", zhReleases);
    }
  }

  async connectedCallback() {
    this.append(this.template);

    const releaseTemplate = this.querySelector("[data-key='release']");
    const { versions } = await this.data;

    versions.slice(1).map((version) => {
      const template = releaseTemplate.cloneNode(true);
      releaseTemplate.parentNode.append(template);
    });

    const slots = this.slots;

    const releases = slots.filter((slot) => slot.dataset.key === "release");

    releases.map((release, index) => {
      let data = versions[index];
      data.created = this.formatDate(data.created_at);

      const releaseSlots = slots.filter(
        (slot) => release.contains(slot) && slot !== release
      );

      releaseSlots.map((slot) => {
        if (slot.dataset.key === "release_notes") {
          slot.innerHTML = data[slot.dataset.key];
        } else {
          this.populateSlot(slot, data[slot.dataset.key]);
        }
      });
    });
  }

  populateSlot(slot, value) {
    if (typeof value == "string" && value.startsWith("http")) {
      if (slot.dataset.key === "release_notes") slot.innerHTML = value;
      if (slot.localName === "img") slot.src = value;
      if (slot.localName === "a") slot.href = value;
    } else {
      slot.textContent = value;
    }
  }

  get data() {
    return fetch(`https://zeroheight.com/open_api/v2/styleguide_versions`, {
      method: "GET",
      headers: {
        "X-API-KEY": zhAPI.key,
        "X-API-CLIENT": zhAPI.client,
      },
    })
      .then((res) => res.json())
      .then((json) => json.data);
  }

  get slots() {
    return [...this.querySelectorAll("[data-key]")];
  }

  get template() {
    return document
      .getElementById(
        this.getAttribute("template") || `${this.localName}-template`
      )
      .content.cloneNode(true);
  }

  formatDate(utc) {
    const event = new Date(utc);
    return event.toLocaleDateString("en-GB");
  }
}

zhReleases.register();
