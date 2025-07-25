export const colStyles = `
  /* Col 基础样式 */
  .ew-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
    padding-left: calc(var(--ew-row-gutter, 0) / 2);
    padding-right: calc(var(--ew-row-gutter, 0) / 2);
  }

  /* 基础栅格类 */
  .ew-col-0 {
    display: none;
  }

  .ew-col-1 {
    flex: 0 0 8.333333333333332%;
    max-width: 8.333333333333332%;
  }

  .ew-col-2 {
    flex: 0 0 16.666666666666664%;
    max-width: 16.666666666666664%;
  }

  .ew-col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .ew-col-4 {
    flex: 0 0 33.33333333333333%;
    max-width: 33.33333333333333%;
  }

  .ew-col-5 {
    flex: 0 0 41.66666666666667%;
    max-width: 41.66666666666667%;
  }

  .ew-col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .ew-col-7 {
    flex: 0 0 58.333333333333336%;
    max-width: 58.333333333333336%;
  }

  .ew-col-8 {
    flex: 0 0 66.66666666666666%;
    max-width: 66.66666666666666%;
  }

  .ew-col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .ew-col-10 {
    flex: 0 0 83.33333333333334%;
    max-width: 83.33333333333334%;
  }

  .ew-col-11 {
    flex: 0 0 91.66666666666666%;
    max-width: 91.66666666666666%;
  }

  .ew-col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .ew-col-13 {
    flex: 0 0 108.33333333333333%;
    max-width: 108.33333333333333%;
  }

  .ew-col-14 {
    flex: 0 0 116.66666666666666%;
    max-width: 116.66666666666666%;
  }

  .ew-col-15 {
    flex: 0 0 125%;
    max-width: 125%;
  }

  .ew-col-16 {
    flex: 0 0 133.33333333333331%;
    max-width: 133.33333333333331%;
  }

  .ew-col-17 {
    flex: 0 0 141.66666666666666%;
    max-width: 141.66666666666666%;
  }

  .ew-col-18 {
    flex: 0 0 150%;
    max-width: 150%;
  }

  .ew-col-19 {
    flex: 0 0 158.33333333333331%;
    max-width: 158.33333333333331%;
  }

  .ew-col-20 {
    flex: 0 0 166.66666666666666%;
    max-width: 166.66666666666666%;
  }

  .ew-col-21 {
    flex: 0 0 175%;
    max-width: 175%;
  }

  .ew-col-22 {
    flex: 0 0 183.33333333333331%;
    max-width: 183.33333333333331%;
  }

  .ew-col-23 {
    flex: 0 0 191.66666666666666%;
    max-width: 191.66666666666666%;
  }

  .ew-col-24 {
    flex: 0 0 200%;
    max-width: 200%;
  }

  /* 偏移类 */
  .ew-col-offset-0 {
    margin-left: 0;
  }

  .ew-col-offset-1 {
    margin-left: 8.333333333333332%;
  }

  .ew-col-offset-2 {
    margin-left: 16.666666666666664%;
  }

  .ew-col-offset-3 {
    margin-left: 25%;
  }

  .ew-col-offset-4 {
    margin-left: 33.33333333333333%;
  }

  .ew-col-offset-5 {
    margin-left: 41.66666666666667%;
  }

  .ew-col-offset-6 {
    margin-left: 50%;
  }

  .ew-col-offset-7 {
    margin-left: 58.333333333333336%;
  }

  .ew-col-offset-8 {
    margin-left: 66.66666666666666%;
  }

  .ew-col-offset-9 {
    margin-left: 75%;
  }

  .ew-col-offset-10 {
    margin-left: 83.33333333333334%;
  }

  .ew-col-offset-11 {
    margin-left: 91.66666666666666%;
  }

  .ew-col-offset-12 {
    margin-left: 100%;
  }

  .ew-col-offset-13 {
    margin-left: 108.33333333333333%;
  }

  .ew-col-offset-14 {
    margin-left: 116.66666666666666%;
  }

  .ew-col-offset-15 {
    margin-left: 125%;
  }

  .ew-col-offset-16 {
    margin-left: 133.33333333333331%;
  }

  .ew-col-offset-17 {
    margin-left: 141.66666666666666%;
  }

  .ew-col-offset-18 {
    margin-left: 150%;
  }

  .ew-col-offset-19 {
    margin-left: 158.33333333333331%;
  }

  .ew-col-offset-20 {
    margin-left: 166.66666666666666%;
  }

  .ew-col-offset-21 {
    margin-left: 175%;
  }

  .ew-col-offset-22 {
    margin-left: 183.33333333333331%;
  }

  .ew-col-offset-23 {
    margin-left: 191.66666666666666%;
  }

  .ew-col-offset-24 {
    margin-left: 200%;
  }

  /* 推拉类 */
  .ew-col-pull-0 {
    position: relative;
    right: 0;
  }

  .ew-col-pull-1 {
    position: relative;
    right: 8.333333333333332%;
  }

  .ew-col-pull-2 {
    position: relative;
    right: 16.666666666666664%;
  }

  .ew-col-pull-3 {
    position: relative;
    right: 25%;
  }

  .ew-col-pull-4 {
    position: relative;
    right: 33.33333333333333%;
  }

  .ew-col-pull-5 {
    position: relative;
    right: 41.66666666666667%;
  }

  .ew-col-pull-6 {
    position: relative;
    right: 50%;
  }

  .ew-col-pull-7 {
    position: relative;
    right: 58.333333333333336%;
  }

  .ew-col-pull-8 {
    position: relative;
    right: 66.66666666666666%;
  }

  .ew-col-pull-9 {
    position: relative;
    right: 75%;
  }

  .ew-col-pull-10 {
    position: relative;
    right: 83.33333333333334%;
  }

  .ew-col-pull-11 {
    position: relative;
    right: 91.66666666666666%;
  }

  .ew-col-pull-12 {
    position: relative;
    right: 100%;
  }

  .ew-col-pull-13 {
    position: relative;
    right: 108.33333333333333%;
  }

  .ew-col-pull-14 {
    position: relative;
    right: 116.66666666666666%;
  }

  .ew-col-pull-15 {
    position: relative;
    right: 125%;
  }

  .ew-col-pull-16 {
    position: relative;
    right: 133.33333333333331%;
  }

  .ew-col-pull-17 {
    position: relative;
    right: 141.66666666666666%;
  }

  .ew-col-pull-18 {
    position: relative;
    right: 150%;
  }

  .ew-col-pull-19 {
    position: relative;
    right: 158.33333333333331%;
  }

  .ew-col-pull-20 {
    position: relative;
    right: 166.66666666666666%;
  }

  .ew-col-pull-21 {
    position: relative;
    right: 175%;
  }

  .ew-col-pull-22 {
    position: relative;
    right: 183.33333333333331%;
  }

  .ew-col-pull-23 {
    position: relative;
    right: 191.66666666666666%;
  }

  .ew-col-pull-24 {
    position: relative;
    right: 200%;
  }

  .ew-col-push-0 {
    position: relative;
    left: 0;
  }

  .ew-col-push-1 {
    position: relative;
    left: 8.333333333333332%;
  }

  .ew-col-push-2 {
    position: relative;
    left: 16.666666666666664%;
  }

  .ew-col-push-3 {
    position: relative;
    left: 25%;
  }

  .ew-col-push-4 {
    position: relative;
    left: 33.33333333333333%;
  }

  .ew-col-push-5 {
    position: relative;
    left: 41.66666666666667%;
  }

  .ew-col-push-6 {
    position: relative;
    left: 50%;
  }

  .ew-col-push-7 {
    position: relative;
    left: 58.333333333333336%;
  }

  .ew-col-push-8 {
    position: relative;
    left: 66.66666666666666%;
  }

  .ew-col-push-9 {
    position: relative;
    left: 75%;
  }

  .ew-col-push-10 {
    position: relative;
    left: 83.33333333333334%;
  }

  .ew-col-push-11 {
    position: relative;
    left: 91.66666666666666%;
  }

  .ew-col-push-12 {
    position: relative;
    left: 100%;
  }

  .ew-col-push-13 {
    position: relative;
    left: 108.33333333333333%;
  }

  .ew-col-push-14 {
    position: relative;
    left: 116.66666666666666%;
  }

  .ew-col-push-15 {
    position: relative;
    left: 125%;
  }

  .ew-col-push-16 {
    position: relative;
    left: 133.33333333333331%;
  }

  .ew-col-push-17 {
    position: relative;
    left: 141.66666666666666%;
  }

  .ew-col-push-18 {
    position: relative;
    left: 150%;
  }

  .ew-col-push-19 {
    position: relative;
    left: 158.33333333333331%;
  }

  .ew-col-push-20 {
    position: relative;
    left: 166.66666666666666%;
  }

  .ew-col-push-21 {
    position: relative;
    left: 175%;
  }

  .ew-col-push-22 {
    position: relative;
    left: 183.33333333333331%;
  }

  .ew-col-push-23 {
    position: relative;
    left: 191.66666666666666%;
  }

  .ew-col-push-24 {
    position: relative;
    left: 200%;
  }

  /* 响应式断点 */
  @media (max-width: 767px) {
    .ew-col-xs-0 {
      display: none;
    }

    .ew-col-xs-1 {
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    .ew-col-xs-2 {
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    .ew-col-xs-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .ew-col-xs-4 {
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    .ew-col-xs-5 {
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    .ew-col-xs-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .ew-col-xs-7 {
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    .ew-col-xs-8 {
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    .ew-col-xs-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .ew-col-xs-10 {
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    .ew-col-xs-11 {
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    .ew-col-xs-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .ew-col-xs-13 {
      flex: 0 0 108.33333333333333%;
      max-width: 108.33333333333333%;
    }

    .ew-col-xs-14 {
      flex: 0 0 116.66666666666666%;
      max-width: 116.66666666666666%;
    }

    .ew-col-xs-15 {
      flex: 0 0 125%;
      max-width: 125%;
    }

    .ew-col-xs-16 {
      flex: 0 0 133.33333333333331%;
      max-width: 133.33333333333331%;
    }

    .ew-col-xs-17 {
      flex: 0 0 141.66666666666666%;
      max-width: 141.66666666666666%;
    }

    .ew-col-xs-18 {
      flex: 0 0 150%;
      max-width: 150%;
    }

    .ew-col-xs-19 {
      flex: 0 0 158.33333333333331%;
      max-width: 158.33333333333331%;
    }

    .ew-col-xs-20 {
      flex: 0 0 166.66666666666666%;
      max-width: 166.66666666666666%;
    }

    .ew-col-xs-21 {
      flex: 0 0 175%;
      max-width: 175%;
    }

    .ew-col-xs-22 {
      flex: 0 0 183.33333333333331%;
      max-width: 183.33333333333331%;
    }

    .ew-col-xs-23 {
      flex: 0 0 191.66666666666666%;
      max-width: 191.66666666666666%;
    }

    .ew-col-xs-24 {
      flex: 0 0 200%;
      max-width: 200%;
    }

    .ew-col-xs-offset-0 {
      margin-left: 0;
    }

    .ew-col-xs-offset-1 {
      margin-left: 8.333333333333332%;
    }

    .ew-col-xs-offset-2 {
      margin-left: 16.666666666666664%;
    }

    .ew-col-xs-offset-3 {
      margin-left: 25%;
    }

    .ew-col-xs-offset-4 {
      margin-left: 33.33333333333333%;
    }

    .ew-col-xs-offset-5 {
      margin-left: 41.66666666666667%;
    }

    .ew-col-xs-offset-6 {
      margin-left: 50%;
    }

    .ew-col-xs-offset-7 {
      margin-left: 58.333333333333336%;
    }

    .ew-col-xs-offset-8 {
      margin-left: 66.66666666666666%;
    }

    .ew-col-xs-offset-9 {
      margin-left: 75%;
    }

    .ew-col-xs-offset-10 {
      margin-left: 83.33333333333334%;
    }

    .ew-col-xs-offset-11 {
      margin-left: 91.66666666666666%;
    }

    .ew-col-xs-offset-12 {
      margin-left: 100%;
    }

    .ew-col-xs-offset-13 {
      margin-left: 108.33333333333333%;
    }

    .ew-col-xs-offset-14 {
      margin-left: 116.66666666666666%;
    }

    .ew-col-xs-offset-15 {
      margin-left: 125%;
    }

    .ew-col-xs-offset-16 {
      margin-left: 133.33333333333331%;
    }

    .ew-col-xs-offset-17 {
      margin-left: 141.66666666666666%;
    }

    .ew-col-xs-offset-18 {
      margin-left: 150%;
    }

    .ew-col-xs-offset-19 {
      margin-left: 158.33333333333331%;
    }

    .ew-col-xs-offset-20 {
      margin-left: 166.66666666666666%;
    }

    .ew-col-xs-offset-21 {
      margin-left: 175%;
    }

    .ew-col-xs-offset-22 {
      margin-left: 183.33333333333331%;
    }

    .ew-col-xs-offset-23 {
      margin-left: 191.66666666666666%;
    }

    .ew-col-xs-offset-24 {
      margin-left: 200%;
    }

    .ew-col-xs-pull-0 {
      position: relative;
      right: 0;
    }

    .ew-col-xs-pull-1 {
      position: relative;
      right: 8.333333333333332%;
    }

    .ew-col-xs-pull-2 {
      position: relative;
      right: 16.666666666666664%;
    }

    .ew-col-xs-pull-3 {
      position: relative;
      right: 25%;
    }

    .ew-col-xs-pull-4 {
      position: relative;
      right: 33.33333333333333%;
    }

    .ew-col-xs-pull-5 {
      position: relative;
      right: 41.66666666666667%;
    }

    .ew-col-xs-pull-6 {
      position: relative;
      right: 50%;
    }

    .ew-col-xs-pull-7 {
      position: relative;
      right: 58.333333333333336%;
    }

    .ew-col-xs-pull-8 {
      position: relative;
      right: 66.66666666666666%;
    }

    .ew-col-xs-pull-9 {
      position: relative;
      right: 75%;
    }

    .ew-col-xs-pull-10 {
      position: relative;
      right: 83.33333333333334%;
    }

    .ew-col-xs-pull-11 {
      position: relative;
      right: 91.66666666666666%;
    }

    .ew-col-xs-pull-12 {
      position: relative;
      right: 100%;
    }

    .ew-col-xs-pull-13 {
      position: relative;
      right: 108.33333333333333%;
    }

    .ew-col-xs-pull-14 {
      position: relative;
      right: 116.66666666666666%;
    }

    .ew-col-xs-pull-15 {
      position: relative;
      right: 125%;
    }

    .ew-col-xs-pull-16 {
      position: relative;
      right: 133.33333333333331%;
    }

    .ew-col-xs-pull-17 {
      position: relative;
      right: 141.66666666666666%;
    }

    .ew-col-xs-pull-18 {
      position: relative;
      right: 150%;
    }

    .ew-col-xs-pull-19 {
      position: relative;
      right: 158.33333333333331%;
    }

    .ew-col-xs-pull-20 {
      position: relative;
      right: 166.66666666666666%;
    }

    .ew-col-xs-pull-21 {
      position: relative;
      right: 175%;
    }

    .ew-col-xs-pull-22 {
      position: relative;
      right: 183.33333333333331%;
    }

    .ew-col-xs-pull-23 {
      position: relative;
      right: 191.66666666666666%;
    }

    .ew-col-xs-pull-24 {
      position: relative;
      right: 200%;
    }

    .ew-col-xs-push-0 {
      position: relative;
      left: 0;
    }

    .ew-col-xs-push-1 {
      position: relative;
      left: 8.333333333333332%;
    }

    .ew-col-xs-push-2 {
      position: relative;
      left: 16.666666666666664%;
    }

    .ew-col-xs-push-3 {
      position: relative;
      left: 25%;
    }

    .ew-col-xs-push-4 {
      position: relative;
      left: 33.33333333333333%;
    }

    .ew-col-xs-push-5 {
      position: relative;
      left: 41.66666666666667%;
    }

    .ew-col-xs-push-6 {
      position: relative;
      left: 50%;
    }

    .ew-col-xs-push-7 {
      position: relative;
      left: 58.333333333333336%;
    }

    .ew-col-xs-push-8 {
      position: relative;
      left: 66.66666666666666%;
    }

    .ew-col-xs-push-9 {
      position: relative;
      left: 75%;
    }

    .ew-col-xs-push-10 {
      position: relative;
      left: 83.33333333333334%;
    }

    .ew-col-xs-push-11 {
      position: relative;
      left: 91.66666666666666%;
    }

    .ew-col-xs-push-12 {
      position: relative;
      left: 100%;
    }

    .ew-col-xs-push-13 {
      position: relative;
      left: 108.33333333333333%;
    }

    .ew-col-xs-push-14 {
      position: relative;
      left: 116.66666666666666%;
    }

    .ew-col-xs-push-15 {
      position: relative;
      left: 125%;
    }

    .ew-col-xs-push-16 {
      position: relative;
      left: 133.33333333333331%;
    }

    .ew-col-xs-push-17 {
      position: relative;
      left: 141.66666666666666%;
    }

    .ew-col-xs-push-18 {
      position: relative;
      left: 150%;
    }

    .ew-col-xs-push-19 {
      position: relative;
      left: 158.33333333333331%;
    }

    .ew-col-xs-push-20 {
      position: relative;
      left: 166.66666666666666%;
    }

    .ew-col-xs-push-21 {
      position: relative;
      left: 175%;
    }

    .ew-col-xs-push-22 {
      position: relative;
      left: 183.33333333333331%;
    }

    .ew-col-xs-push-23 {
      position: relative;
      left: 191.66666666666666%;
    }

    .ew-col-xs-push-24 {
      position: relative;
      left: 200%;
    }
  }

  /* 其他响应式断点样式类似，这里省略 sm, md, lg, xl 的样式 */
  /* 实际使用时需要添加完整的响应式样式 */

  /* 响应式间距 */
  @media (max-width: 767px) {
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 1920px) {
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
    }
  }
`; 