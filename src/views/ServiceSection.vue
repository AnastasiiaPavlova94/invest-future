<template>
  <section>
    <div class="container">
      <div class="services" id="sr">
        <div>
          <h2>view my services</h2>
          <p>
            Id at urna non viverra eu volutpat porttitor elementum. Viverra
            senectus dui ultricies dolor. Varius nibh velit pellentesque sapien,
            sapien neque dignissim.
          </p>
        </div>
        <div class="services_blok">
          <div class="card">
            <h4>Architecture Portfolio</h4>
            <p>
              There are many variations of passages of Lorem is as Ipsum
              available but the majority have suffered alteration
            </p>
          </div>
          <div class="card">
            <h4>planning process</h4>
            <p>
              There are many variations of passages of Lorem is as Ipsum
              available but the majority have suffered alteration
            </p>
          </div>
          <div class="card">
            <h4>unique design</h4>
            <p>
              There are many variations of passages of Lorem is as Ipsum
              available but the majority have suffered alteration
            </p>
          </div>
          <div class="card">
            <h4>consultation</h4>
            <p>
              There are many variations of passages of Lorem is as Ipsum
              available but the majority have suffered alteration
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="clients">
        <div class="counter">
          <div class="counter_item">
            <h5>750</h5>
            <span>Projects Done</span>
          </div>
          <div class="counter_item">
            <h5>315</h5>
            <span>Regular Clients</span>
          </div>
          <div class="counter_item">
            <h5>19</h5>
            <span>Years Experience</span>
          </div>
        </div>

        <div class="comment">
          <img src="../assets/img/Rectangle_sect5.jpg" alt="cmentImg" />
          <div class="comment_item">
            <h2>what clients says</h2>
            <svg
              width="196"
              height="137"
              viewBox="0 0 147 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M147 0.399988V23.2C135 25.2 126.6 29.4 121.8 35.8C117 42.2 114.6 53.6 114.6 70H145.2V127H86.4V79C86.4 54.2 91 35 100.2 21.4C109.4 7.39998 125 0.399988 147 0.399988ZM60.6 0.399988V23.2C48.6 25.2 40.2 29.4 35.4 35.8C30.6 42.2 28.2 53.6 28.2 70H58.8V127H1.78814e-07V79C1.78814e-07 54.2 4.6 35 13.8 21.4C23 7.39998 38.6 0.399988 60.6 0.399988Z"
                fill="#F5F5F5"
              />
            </svg>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              est et nibh eleifend neque ultrices. Sit nulla eget vulputate
              bibendum sit. Fringilla lacus rhoncus posuere lectus. Sectetur
              adipi elit proin est et nibh”
            </p>
            <h4>armando gonzález</h4>
            <div class="sum_dots">
              <img src="../assets/img/dotsDark.svg" alt="dots" class="dots" />
              <img src="../assets/img/dotsLight.svg" alt="dots" class="dots" />
              <img
                src="../assets/img/dotsLight.svg"
                alt="dots"
                class="dots"
              /><br />
            </div>

            <span>CEO, unity real state</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="faqs">
        <div class="faqs_item">
          <h2>FAQS</h2>
          <p>
            Id at urna non viverra eu volutpat porttitor elementum. Viverra
            senectus dui ultricies dolor.
          </p>
        </div>
    <div class="faqs_qvesh">
          <vue-collapsible-panel-group>
            <div class="faqs_qvesh_item">
              <vue-collapsible-panel :expanded="true">
                <template #title>
                  <h3>What type of projects do you do?</h3>
                  <span
                    :class="(expanded = true ? 'icon-minus' : 'icon-plus')"
                  ></span>
                </template>
                <template #content> 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nisi, augue urna, mauris elementum ligula semper enim.
                    Tristique sed sit facilisis ultrices rhoncus eget
                    ullamcorper tellus.
                  </p>
                </template>
              </vue-collapsible-panel>
            </div>

            <div class="faqs_qvesh_item">
              <vue-collapsible-panel :expanded="false">
                <template #title>
                  <h3>What type of projects do you do?</h3>
                  <span
                    :class="(expanded = false ? 'icon-minus' : 'icon-plus')"
                  ></span>
                </template>
                <template #content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nisi, augue urna, mauris elementum ligula semper enim.
                    Tristique sed sit facilisis ultrices rhoncus eget
                    ullamcorper tellus.
                  </p>
                </template>
              </vue-collapsible-panel>
            </div>

            <div class="faqs_qvesh_item">
              <vue-collapsible-panel :expanded="false">
                <template #title>
                  <h3>What type of projects do you do?</h3>
                  <span
                    :class="(expanded = false ? 'icon-minus' : 'icon-plus')"
                  ></span>
                </template>
                <template #content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nisi, augue urna, mauris elementum ligula semper enim.
                    Tristique sed sit facilisis ultrices rhoncus eget
                    ullamcorper tellus.
                  </p>
                </template>
              </vue-collapsible-panel>
            </div>

            <div class="faqs_qvesh_item">
              <vue-collapsible-panel :expanded="false">
                <template #title>
                  <h3>What type of projects do you do?</h3>
                  <span
                    :class="(expanded = false ? 'icon-minus' : 'icon-plus')"
                  ></span>
                </template>
                <template #content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nisi, augue urna, mauris elementum ligula semper enim.
                    Tristique sed sit facilisis ultrices rhoncus eget
                    ullamcorper tellus.
                  </p>
                </template>
              </vue-collapsible-panel>
            </div>
          </vue-collapsible-panel-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@dafcoe/vue-collapsible-panel";

export default {
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  //    data() {
  // 		return {
  // 			counter: 0
  // 		}
  // 	},
  // 	created(){
  // 		counter++
  // 	}
};
</script>

<style>
.vcp__header-icon {
  display: none;
}
.vcp__header-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0 5px;
}
</style>
