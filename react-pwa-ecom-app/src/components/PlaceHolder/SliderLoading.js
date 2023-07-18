import React, { Component } from 'react'

export default class SliderLoading extends Component {
  render() {
    return (
      <div className={this.props.isLoading}>
          <div className="row">
                    <div className="col-3">
                    <div class="ph-row">
                    <div class="ph-col-12"></div>
                    <div class="ph-col-12"></div>
                    <div class="ph-col-12"></div>
                    <div class="ph-col-12"></div>
                    <div class="ph-col-12"></div>
                     <div class="ph-col-12"></div>
                     <div class="ph-col-12"></div>
                     <div class="ph-col-12"></div>

                    </div>

                    </div>

                    <div className="col-9">
                    <div class="ph-picture"></div>
                    </div>

               </div>
      </div>
    )
  }
}
